import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { api, wrapRpcPayload } from '~/lib/api/api';
import { generateHexId, generateUsername } from '~/lib/data';

export async function POST(req: NextRequest) {
  return req.json().then((data) => {
    return createAccount(data)
      .then((responseData) => {
        return NextResponse.json(responseData);
      })
      .catch((error) => {
        console.error(error);

        return NextResponse.json({
          status: 'error',
          message: error.message,
        });
      });
  });
}

const unwrapRpcPayload = (response: any) => {
  return response.data.result;
};

const BASE_RNG_LENGTH = 4;

const getRngLength = (attempt: number) => {
  return BASE_RNG_LENGTH + attempt - 1;
};

const createAccount = async (data: any) => {
  return getUsername(data.firstName, data.lastName).then((username) => {
    const password = generateHexId(12);
    const hashedPassword = createHash('sha256').update(password).digest('hex');

    const createAccountPayload = {
      first_name: data.firstName,
      last_name: data.lastName,
      organization_name: data.orgName,
      email: data.email,
      phone: data.phone,
      username,
      password: hashedPassword,
    };
    console.log(`🚀 ~ file: route.ts:69 ~ .then ~ createAccountPayload:`, {
      createAccountPayload,
    });

    return api
      .request({
        url: `/account`,
        data: wrapRpcPayload(`create`, createAccountPayload),
      })
      .then((accountCreateResponse) => unwrapRpcPayload(accountCreateResponse))
      .then((result) => {
        console.log(`🚀 ~ file: route.ts:59 ~ .then ~ accountData:`, result);

        const responseData = {
          ...result,
          data: {
            auth: { username, password },
            ...result.data,
          },
        };

        return responseData;
      });
  });
};

const getUsername = async (
  firstName: string,
  lastName: string,
  attempt = 1
): Promise<string> => {
  const username = generateUsername(firstName, lastName, getRngLength(attempt));
  const rpcPayload = wrapRpcPayload(`username-available`, { username });

  return api
    .request({
      url: `/account`,
      data: rpcPayload,
    })
    .then((response) => unwrapRpcPayload(response))
    .then((response) => {
      if (response.data === true) {
        return username;
      } else if (attempt < 5) {
        return getUsername(firstName, lastName, attempt + 1);
      } else {
        throw new Error(`Unable to generate a unique username`);
      }
    });
};

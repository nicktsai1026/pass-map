import { NextRequest,  NextResponse } from "next/server";
import axios from 'axios';

const OPENROUTESERVICE_AUTOCOMPLETE_URL = `${process.env.OPENROUTESERVICE_ENDPOINT}/autocomplete`;
const OPENROUTESERVICE_API_KEY = process.env.OPENROUTESERVICE_TOKEN;

export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get('address') || "";

  try {
    const response = await axios.get(OPENROUTESERVICE_AUTOCOMPLETE_URL, {
      params: {
        'Content-Type': 'application/json',
        'boundary.country': 'CAN',
        text: address,
        api_key: OPENROUTESERVICE_API_KEY
      }
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error)
    throw new Error("Error in autocomplete API!!");
  }
}

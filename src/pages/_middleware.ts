import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {

	console.log("GEO", req.geo);

	console.log("Headers", req.headers)
}
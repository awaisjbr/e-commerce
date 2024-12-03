import { NextResponse } from "next/server";
import express from "express";

const app = express();

app.get("/api", (req, res) => {
    res.send({msg: "Api working"})
});

app.listen(3000, () => {
    console.log("Hello")
})

// export async function GET(request){
//     return NextResponse.json({msg: "Api working"})
// }
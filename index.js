//@ts-ignore
import * as functions from "firebase-functions"
import React from 'react';
import { renderToString } from 'react-dom/server';
import GetSwitch from './src/GetSwitch';
import * as express from 'express';
import fs from 'fs';

const index = fs.readFileSynk(_dirname + "/public/index.html", 'utf8');

const app = express();
app.get('**', (req, res) => {
  const html = renderToString(<GetSwitch/>);
  const finalHtml = index.replace("<!-- ::APP:: -->", html);
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(finalHtml);
});

export let ssrapp = functions.https.onRequest(app);
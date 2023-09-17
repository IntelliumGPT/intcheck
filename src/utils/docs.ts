export interface Doc {
  id: string;
  title: string;
  description: string;
  use: string;
  resources: string[] | { title: string, link: string}[];
  screenshot?: string;
}

export const featureIntro = [
  'When conducting an OSINT investigation on a given website or host, there are several key areas to look at. Each of these are documented below, along with links to the tools and techniques you can use to gather the relevant information.',
  'Web-Check can automate the process of gathering this data, but it will be up to you to interpret the results and draw conclusions.',
];

export const about = [
`Web-Check is a powerful all-in-one tool for discovering information about a website/host.
The core philosophy is simple: feed Web-Check a URL and let it gather, collate, and present a broad array of open data for you to delve into.`,

`The report shines a spotlight onto potential attack vectors, existing security measures,
and the web of connections within a site's architecture.
The results can also help optimizing server responses, configuring redirects,
managing cookies, or fine-tuning DNS records for your site.`,

`So, weather you're a developer, system administrator, security researcher, penetration
tester or are just interested in discovering the underlying technologies of a given site 
- I'm sure you'll find this a useful addition to your toolbox.`,
];

export const license = `The MIT License (MIT)
Copyright (c) Alicia Sykes <alicia@omg.com> 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included install 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;

export const supportUs = [
  "Web-Check is free to use without restriction.",
  "All the code is open source, so you're also free to deploy your own instance, as well as fork, modify and distribute the code in both private and commerical settings.",
  "Running web-check does cost me a small amount of money each month, so if you're finding the app useful, consider <a href='https://github.com/sponsors/Lissy93'>sponsoring me on GitHub</a> if you're able to. Even just $1 or $2/month would be a huge help in supporting the ongoing project running costs.",
  "Otherwise, there are other ways you can help out, like submitting or reviewing a pull request to the <a href='https://github.com/Lissy93/web-check'>GitHub repo</a>, upvoting us on <a href='https://www.producthunt.com/posts/web-check'>Product Hunt</a>, or by sharing with your network.",
  "But don't feel obliged to do anything, as this app (and all my other projects) will always remain 100% free and open source, and I will do my best to ensure the managed instances remain up and available for as long as possible :)",
];

export const fairUse = [
  'Please use this tool responsibly. Do not use it for hosts you do not have permission to scan. Do not use it as part of a scheme to attack or disrupt services.',
  'Requests may be rate-limited to prevent abuse. If you need to make more bandwidth, please deploy your own instance.',
  'There is no guarantee of uptime or availability. If you need to make sure the service is available, please deploy your own instance.',
  'Please use fairly, as excessive use will quickly deplete the lambda function credits, making the service unavailable for others (and/or empty my bank account!).',
];

export default docs;

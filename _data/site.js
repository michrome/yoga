module.exports = function () {
  const baseUrl = process.env.BASE_URL || "https://www.hello-yoga.co.uk";
  const imgBaseUrl = `${baseUrl}/images`;

  return {
    baseUrl: baseUrl,
    imgBaseUrl: imgBaseUrl,
    robots: "/robots.txt",
    siteMap: "/sitemap.txt",
  };
};

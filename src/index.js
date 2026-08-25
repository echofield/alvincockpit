export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') || '';

    if (!contentType.includes('text/html')) return response;

    return new HTMLRewriter()
      .on('body', {
        element(element) {
          element.append('<script src="/upgrade.js?v=20260825-focus-local-v2"></script>', { html: true });
        },
      })
      .transform(response);
  },
};

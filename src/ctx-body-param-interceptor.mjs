import { CTXInterceptor } from "./ctx-interceptor.mjs";

/**
 * Extracts params from request body.
 * Supported content types are:
 * - application/json
 * - application/x-www-form-urlencoded
 */
export class CTXBodyParamInterceptor extends CTXInterceptor {
  /**
   * @return {string} 'ctx-body-param'
   */
  static get name() {
    return "ctx-body-param";
  }

  async receive(endpoint, next, ctx, ...args) {
    if (ctx.is("application/x-www-form-urlencoded")) {
      const chunks = [];
      for await (const chunk of ctx.req) {
        chunks.push(chunk);
      }
      
      const params = Object.fromEntries(chunks.join("").split(/&/).map(p => p.split(/=/).map(x => decodeURIComponent(x))));

      ctx.res.writeHead(200, {
        ...this.headers,
        "Content-Type": "test/plain"
      });

      ctx.res.end(await next(params, ...args));
    }
    else if (ctx.is("application/json")) {
      const chunks = [];
      for await (const chunk of ctx.req) {
        chunks.push(chunk);
      }

      ctx.res.writeHead(200, {
        ...this.headers,
        "Content-Type": "application/json"
      });
      ctx.res.end(
        JSON.stringify(await next(JSON.parse(chunks.join("")), ...args))
      );
    } else {
      ctx.throw(415, "no json");
    }
  }
}

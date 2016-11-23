using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngCliNet.App_Start
{
    using System.Net.Http.Headers;
    using System.Web.Http;

    class WebApiConfig
    {
        public static void Register(HttpConfiguration configuration)
        {
            configuration.Routes.MapHttpRoute("Api Default", "api/{controller}/{id}",
                new { id = RouteParameter.Optional });

            configuration.Formatters.JsonFormatter.SupportedMediaTypes
                .Add(new MediaTypeHeaderValue("text/html"));
        }
    }
}
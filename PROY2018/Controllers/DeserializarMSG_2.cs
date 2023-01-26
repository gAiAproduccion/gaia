using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PROY2018.Controllers
{
    public class DeserializarMSG_2
    {

        public class Rootobject
        {
            public string id { get; set; }
            public float var1 { get; set; }
            public float var2 { get; set; }
            public float var3 { get; set; }
            public float var4 { get; set; }
            public float var5 { get; set; }
            public string time { get; set; }
            public string isend { get; set; }
        }

        public class Rootobject2
        {
            public string id { get; set; }
            public float var1 { get; set; }
            public float var2 { get; set; }
            public float var3 { get; set; }
            public float var4 { get; set; }
            public float var5 { get; set; }
            public float var6 { get; set; }
            public string time { get; set; }
            public string isend { get; set; }
        }

    }
}
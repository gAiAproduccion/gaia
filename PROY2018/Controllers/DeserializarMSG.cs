using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PROY2018.Controllers
{
    public class DeserializarMSG
    {

        public class Rootobject
        {
            public string deviceId { get; set; }
            public string facilityId { get; set; }
            public Metric[] metrics { get; set; }
        }

        public class Metric
        {
            public string name { get; set; }
            public string _uint { get; set; }
            public string timestamp { get; set; }
            public string value { get; set; }
        }


    }
}
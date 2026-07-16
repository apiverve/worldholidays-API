using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WorldHolidays
{
    /// <summary>
    /// Query options for the World Holidays API
    /// </summary>
    public class WorldHolidaysQueryOptions
    {
        /// <summary>
        /// The 2-letter country code for which you want to get the holidays
        /// </summary>
        [JsonProperty("country")]
        public string Country { get; set; }

        /// <summary>
        /// The year for which you want to get the holidays
        /// </summary>
        [JsonProperty("year")]
        public int? Year { get; set; }
    }
}

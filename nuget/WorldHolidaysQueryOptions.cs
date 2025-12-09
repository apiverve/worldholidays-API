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
        /// The country code for which you want to get the holidays (e.g., US). Must be a two letter country code
        /// Example: US
        /// </summary>
        [JsonProperty("country")]
        public string Country { get; set; }

        /// <summary>
        /// The year for which you want to get the holidays
        /// Example: 2025
        /// </summary>
        [JsonProperty("year")]
        public string Year { get; set; }
    }
}

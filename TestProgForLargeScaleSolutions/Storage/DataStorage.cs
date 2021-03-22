using System.Text.Json.Serialization;

namespace TestProgForLargeScaleSolutions.Storage
{
    public class DataStorage
    {
        public DataStorage() { }
        [JsonPropertyName("data")]
        public string[] Data { get; set; }
    }
}

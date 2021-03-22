using System;
using System.Net.Http;
using System.Text.Json;
using TestProgForLargeScaleSolutions.Storage;

namespace TestProgForLargeScaleSolutions.Modules
{
    public class DataRouter
    {
        private static readonly HttpClient _client;
        private readonly string _connection;

        static DataRouter()
        {
            _client = new HttpClient();
        }
         
        public DataRouter(string connection)
        {
            _connection = connection;
        }

        public DataStorage GetContent()
        {
            HttpResponseMessage response = _client.GetAsync(new Uri(_connection)).Result;
            var t = response.Content.ReadAsStringAsync();

            DataStorage storage = JsonSerializer.Deserialize<DataStorage>(t.Result);
            return storage;
        }
    }
}

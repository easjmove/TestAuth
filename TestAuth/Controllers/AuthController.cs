using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // GET: api/<Auth>
        [HttpGet]
        public Email Get()
        {
            HttpContext.Session.SetString("somethingelse", "asd");
            string fromSession = HttpContext.Session.GetString("email");
            return new Email() { mail = fromSession, prop2="test" };
        }

        // POST api/<Auth>
        [HttpPost]
        public string Post([FromBody] Email email)
        {
            HttpContext.Session.SetString("email", email.mail);
            return email.mail;
        }
    }
}

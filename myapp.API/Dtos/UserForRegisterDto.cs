using System.ComponentModel.DataAnnotations;

namespace myapp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        [MaxLength()]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage="Password must be between 4 and 8 charecters.")]
        public string Password { get; set; }
    }
}
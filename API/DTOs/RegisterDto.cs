using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "Không được để trống")]
        public string Username { get; set; }

        [Required]
        [StringLength(8,MinimumLength = 4,ErrorMessage = "Phải lớn hơn 4 và nhỏ hơn 8")]
        public string Password { get; set; }
    }
}
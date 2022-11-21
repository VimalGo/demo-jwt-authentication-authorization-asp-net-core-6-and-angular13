using JWT_Asp_Net_6.Models;

namespace JWT_Asp_Net_6.DAL
{
    public interface IAccountDAL
    {
        JWTTokens AuthenticateAndGenerateToken(Users user);
    }
}

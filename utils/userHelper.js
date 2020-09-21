export function extractUser(req) {
  if (!req.user) return null;
  // take only needed user fields to avoid sensitive ones (such as password)
  const {
    name, alias, email, userType, profilePic, recipies, subscription, products, 
  } = req.user;
  return {
    name, alias, email, userType, profilePic, recipies, subscription, products, 
  };
}
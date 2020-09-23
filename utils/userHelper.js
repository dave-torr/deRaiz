export function extractUser(req) {
  if (!req.user) return null;
  // take only needed user fields to avoid sensitive ones (such as password)
  const {
        name, alias, email, savedRecipies, products, savedPublications, likedPublications, userType, profilePic, subscription, forumPosts,
  } = req.user;
  return {
    name, alias, email, savedRecipies, products, savedPublications, likedPublications, userType, profilePic, subscription, forumPosts,
  };
}
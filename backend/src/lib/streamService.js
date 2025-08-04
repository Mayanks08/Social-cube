// services/streamService.js
import { StreamChat } from 'stream-chat';
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret) {
  console.error('Please set STREAM_API_KEY and STREAM_API_KEY_SECRET environment variables.');
}

const streamClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async (userData) => {
  if (!userData?.id || typeof userData.id !== 'string') {
  throw new Error("User ID is required and must be a string when updating a user in Stream.");
  } 
  try {
    // Create or update user in Stream
    await streamClient.upsertUsers([userData]);
    return userData
    
  
  } catch (error) {
    console.error(' error upserting stream user:', error);
    throw error;
  }
};
// Todo we do it later
export const generateStreamToken=(userId)=>{
  try {
    // ensure UserId is string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr)
  } catch (error) {
    console.error("Error generating stream token:", error);
  }
}




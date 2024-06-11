const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const messageSchema = new Schema(
  {
    text:{
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    videoUrl: {
      type: String,
      default: "",
    },
    seen: {
      type: Boolean,
      default: false,
    }
  },{
    timestamps: true
  }
);


const conversationSchema = new Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'User',
      },
      receiver: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User',
        },
        messages: [
          {
            type: mongoose.Schema.ObjectId,
        ref: 'Message',
      }
      ],
      },
  {
    timestamps: true,
    }
    );
    
const Conversation = model('Conversation', conversationSchema);
const Message = model('Message', messageSchema);

module.exports = {
  Conversation, 
  Message,
} 

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MessageType } from "./globalTypes";

// ====================================================
// GraphQL fragment: TextMessage
// ====================================================

export interface TextMessage_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  color: string;
  discrim: string;
  id: string;
  name: string;
}

export interface TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  fileName: string;
  size: number;
}

export interface TextMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
}

export interface TextMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface TextMessage_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface TextMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: TextMessage_embeds_author | null;
  fields: TextMessage_embeds_fields[] | null;
  image: TextMessage_embeds_image | null;
  provider: TextMessage_embeds_provider | null;
  footer: TextMessage_embeds_footer | null;
  thumbnail: TextMessage_embeds_thumbnail | null;
  video: TextMessage_embeds_video | null;
}

export interface TextMessage {
  __typename: "Message";
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  author: TextMessage_author;
  reactions: TextMessage_reactions[] | null;
  attachments: TextMessage_attachments[];
  stickers: TextMessage_stickers[] | null;
  messageReference: TextMessage_messageReference | null;
  application: TextMessage_application | null;
  embeds: TextMessage_embeds[];
}

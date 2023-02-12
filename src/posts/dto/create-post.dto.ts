import Joi from 'joi';

const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});
export default createPostSchema;

export interface CreatePostDto {
  title: string;
  content: string;
}

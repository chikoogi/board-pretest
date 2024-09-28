import { fakerKO as faker } from "@faker-js/faker";

export const FREE_BOARD = "freeBoard";
export const QUESTION_BOARD = "questionBoard";

export const MOCK_IMAGE_LIST = Array.from({ length: 4 }, (_, idx) =>
  faker.image.urlPicsumPhotos({
    width: 500,
    height: 500,
  })
);

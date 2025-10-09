export interface Album {
  userId: number;
  id: number;
  title: string;
}

export const albums: Album[] = [
  { userId: 1, id: 1, title: "Отпуск 2024" },
  { userId: 1, id: 2, title: "Семейные фото" },
  { userId: 1, id: 3, title: "Природа" },
  
  { userId: 2, id: 4, title: "Путешествия" },
  { userId: 2, id: 5, title: "Хобби" },
  
  { userId: 3, id: 6, title: "Творчество" },
  { userId: 3, id: 7, title: "Друзья" },
  { userId: 3, id: 8, title: "Город" }
];

export interface Photo {
  albumId: number;
  photoId: number;
  title: string;
}

export const photos: Photo[] = [
  { albumId: 1, photoId: 1, title: "фото1"},
  { albumId: 1, photoId: 2, title: "фото2"},
  
  { albumId: 2, photoId: 3, title: "фото3"},
  { albumId: 2, photoId: 4, title: "фото4"},
  
  { albumId: 3, photoId: 5, title: "фото5"},
  { albumId: 3, photoId: 6, title: "фото6"},
  
  { albumId: 4, photoId: 7, title: "фото7"},
  { albumId: 5, photoId: 8, title: "фото8"},
  { albumId: 6, photoId: 9, title: "фото9"}
];

export interface Todo {
  userId: number;
  todoId: number;
  title: string;
}

export const todo: Todo[] = [
  { userId: 1, todoId: 1, title: "Пляж"},
  { userId: 1, todoId: 2, title: "Горы"},
  
  { userId: 2, todoId: 3, title: "Семейный ужин"},
  { userId: 2, todoId: 4, title: "Праздник"},
  
  { userId: 3, todoId: 5, title: "Лес"},
  { userId: 3, todoId: 6, title: "Река"},
  
  { userId: 4, todoId: 7, title: "Париж"},
  { userId: 5, todoId: 8, title: "Рисование"},
  { userId: 6, todoId: 9, title: "Арт проект"}
];

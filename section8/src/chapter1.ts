/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`작성자: ${author.name}, ${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "심지은",
    age: 36,
  },
};

printAuthorInfo(post.author);

// 배열타입으로
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`작성자: ${author.name}, ${author.id}`);
}

const post2: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "심지은",
    age: 36,
  },
};

printAuthorInfo2(post.author);

// 튜플과 함께
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

// type Tup3 = Tup[3];
type TupNum = Tup[number];

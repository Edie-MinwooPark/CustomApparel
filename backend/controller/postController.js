const { where } = require("sequelize");
const db = require("../models");
const POST = db.POST;
const COMMENTS = db.COMMENTS;
const RECOMMENTS = db.RECOMMENTS;
const USER = db.USER;

// 전체 post 목록 반환하는 함수
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await POST.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};

// 특정 카테고리 post 목록 반환하는 함수
exports.getPostsByHashtag = async (req, res) => {
  const { hash_tag } = req.params;
  try {
    const posts = await POST.findAll({ where: { hash_tag } });
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};
// 상세 post 내용 반환하는 함수
exports.getPostDetail = async (req, res) => {
  const { id } = req.params;
  // console.log(req);
  try {
    const post = await POST.findOne({
      where: { id },
      include: [
        { model: COMMENTS, include: [{ model: RECOMMENTS }] },
        { model: USER },
      ],
    });
    console.log("post :", post);
    res.json(post);
    // res.json();
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};

// post 등록하는 함수
exports.createPost = async (req, res) => {
  const {
    user_id,
    post_title,
    post_content,
    post_img,
    callbyuser_id,
    hash_tag,
  } = req.body;
  console.log(req.body);
  try {
    const addpost = await POST.create({
      user_id,
      post_title,
      post_content,
      post_img: "/img/" + post_img,
      callbyuser_id,
      hash_tag,
    });
    res.json(addpost);
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

exports.postLikes = async (req, res) => {
  try {
    const { action, user_id, post_id, post_title, post_content } = req.body;

    // 특정 게시글을 찾습니다.
    const post = await POST.findOne({ where: { id: post_id } });

    if (!post) {
      return res.json({ success: false, message: "Post not found" });
    }

    let likesArray = post?.likes.length != 0 ? JSON.parse(post.likes) : []; // likes를 배열로 파싱

    if (action === "like") {
      // 중복 좋아요 방지
      if (!likesArray.includes(user_id)) {
        likesArray.push(user_id);
      }
    } else if (action === "unlike") {
      // 사용자 ID를 배열에서 제거
      likesArray = likesArray.filter((id) => id !== user_id);
    }

    // 좋아요 목록을 업데이트
    await post.update({
      likes: JSON.stringify(likesArray),
      post_title: post_title, // 이 부분은 필요한지 재확인이 필요합니다.
      post_content: post_content, // 이 부분은 필요한지 재확인이 필요합니다.
    });

    res.json({ success: true });
  } catch (error) {
    console.log("에러럴", error);
    res.json({ success: false, error: error.message });
  }
};

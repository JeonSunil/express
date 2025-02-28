function layout(File) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./public/style/style.css">
</head>
<body>
  <main>
    <section>
      <article>
        <a href = "/">홈</a>
        <a href = "/">글 목록</a>
      </article>
        <a href = "/add">글 작성</a>
    </section>
    <section>
    </section>
    <section>
    </section>
    <section>
    </section>
    <section>
    </section>
    
  </main>

  <script type="module" src="${File}" ></script>
  
</body>
</html>
  `
}

module.exports = layout;
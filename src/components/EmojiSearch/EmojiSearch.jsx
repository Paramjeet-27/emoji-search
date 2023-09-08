import { useState } from "react";
import ipdata from "./../../emojis/emojis.json";
import styles from "./EmojiSearch.module.css";

const EmojiSearch = () => {
  const [ip, setIp] = useState("");
  const [filteredEmoji, setFilteredEmoji] = useState(ipdata);

  // const onClickHandler = () => {
  //   const searched = ipdata.filter((ele) => ele.keywords.indexOf(ip) !== -1);
  //   setFilteredEmoji(searched);
  //   setIp("");
  // };

  const onChangeHandler = (e) => {
    const result = e.target.value.toLowerCase();
    setIp(result);
    const searched = ipdata.filter((ele) => ele.keywords.indexOf(ip) !== -1);
    setFilteredEmoji(searched);
  };

  const ipKeyHandler = (e) => {
    if (e.key === "Enter") {
      const searched = ipdata.filter((ele) => ele.keywords.indexOf(ip) !== -1);
      setFilteredEmoji(searched);
      setIp("");
    }
  };

  const allEmojis = filteredEmoji.map((ele, index) => (
    <div key={index} className={styles.emojiList}>
      <span className={styles.emoji}>{ele.symbol}</span> {ele.title}
    </div>
  ));
  return (
    <>
      <h1 className={styles.heading}>Emoji Search</h1>
      <input
        type="text"
        onChange={onChangeHandler}
        value={ip}
        onKeyUp={ipKeyHandler}
        className={styles.ipBox}
      />
      {/* <button onClick={onClickHandler}>Search</button> */}
      {filteredEmoji.length === 0 && (
        <h1 className={styles.noemoji}>NO EMOJI FOUND</h1>
      )}
      {allEmojis}
    </>
  );
};
export default EmojiSearch;

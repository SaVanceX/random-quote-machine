import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { pageLoad, getQuote } from "../store/slices/quote.slice";

const QuoteBox = () => {
  const api_url = "https://api.api-ninjas.com/v1/quotes?limit=1";
  const apiKey = "OKRSYUsRd7unzAEEoFl7dQ==UrQnKln8RQDlcO2E";
  const dispatch = useDispatch();
  const quoteData = useSelector((state) => state.quoteslice.quote);
  const twitterUrl = (author, text) => {
    return `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
      text + " " + author
    )}`;
  };

  const colors = [
    "#C49AC7",
    "#B6E284",
    "#6CD9A9",
    "#605CB8",
    "#E64640",
    "#681C42",
    "#D20074",
    "#F1D6DB",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  let color = Math.floor(Math.random() * colors.length);

  const getQuoteData = async () => {
    const { data } = await axios({
      method: "get",
      url: api_url,
      headers: { "X-API-KEY": apiKey },
      contentType: "application/json",
    })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });

    dispatch(getQuote(data));
  };

  const loadData = async () => {
    const { data } = await axios({
      method: "get",
      url: api_url,
      headers: { "X-API-KEY": apiKey },
      contentType: "application/json",
    })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });

    dispatch(pageLoad(data));
  };

  // The empty array in the 2nd argument means that we make the request only when the component mounts.
  useEffect(() => {
    loadData();
  }, []);

  if (quoteData[0]) {
    const { author, quote } = quoteData[0];
    return (
      <div
        className="row align-items-center justify-content-center app-row bgcolor"
        style={{
          backgroundColor: colors[color],
        }}
      >
        <div className="col-sm col-md-6">
          <div className="quote-box animation-quote-box" id="quote-box">
            <p
              id="text"
              className="text"
              style={{
                color: colors[color],
              }}
            >
              "{quote}"
            </p>
            <div className="row justify-content-end">
              <p
                id="author"
                style={{
                  color: colors[color],
                }}
              >
                - {author}
              </p>
            </div>
            <div className="row btns justify-content-between">
              <a
                id="tweet-quote"
                href={twitterUrl(author, quote)}
                target="_blank"
                style={{
                  backgroundColor: colors[color],
                }}
                className={"btnBackground twitter-background"}
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a></a>
              <button
                onClick={getQuoteData}
                className="btnBackground twitter-background"
                id="new-quote"
                style={{ backgroundColor: colors[color] }}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default QuoteBox;

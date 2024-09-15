const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

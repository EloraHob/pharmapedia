import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
    let items = [];
    
    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <Pagination.Item key={page} active={page === currentPage + 1} onClick={() => onPageChange(page - 1)}>
          {page}
        </Pagination.Item>,
      );
    }
  
    return <Pagination>{items}</Pagination>;
  };
  
  export default PaginationComponent;
  
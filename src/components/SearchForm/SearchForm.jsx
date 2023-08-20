import { Button, Form, Input } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;

    if (!query) {
      alert('Enter name of movie to search');
      return;
    }

    onSubmit(query);

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search..."
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;

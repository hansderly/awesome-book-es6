const data = localStorage.getItem('library');
let library = JSON.parse(data) || [];

export default library;
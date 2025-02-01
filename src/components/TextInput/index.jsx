export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input 
            type="search" 
            className='formTextInput' 
            onChange={handleChange} 
            value={searchValue} 
            placeholder='procure por algo' 
        />
    );
}
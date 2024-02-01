const Currency = () => {
    return(
    <div className='alert alert-info'>
        <span>
            Currency {
            <select className="currencylist" id="currencyselect">
            <option class="list" value="Dollar" name="dollar"> $ Dollar</option>
            <option value="Pound" name="pound">£ Pound</option>
            <option value="Euro" name="euro">€ Euro</option>
            <option value="Ruppee" name="ruppee">₹ Ruppee</option>
            </select>}
        </span>
    </div>
    );
};
export default Currency;

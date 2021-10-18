import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {activeRating, changeRating} = props

      const onClickRating = () => {
        changeRating(rating.ratingId)
      }

      const ratingClassname =
        activeRating === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          className="rating-item"
          onClick={onClickRating}
          key={rating.ratingId}
        >
          <img
            className="rating-image"
            src={rating.imageUrl}
            alt={`rating-${rating.ratingId}`}
          />
          <p className={ratingClassname}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {activeCategory, changeCategory} = props

      const onClickCategory = () => changeCategory(category.categoryId)

      const isActive = activeCategory === category.categoryId

      const categoryClassName = isActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategory}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-container">
        <input
          className="search-input"
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        className="clear-filters-btn"
        type="button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

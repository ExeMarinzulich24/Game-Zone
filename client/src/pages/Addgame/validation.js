const regexImg = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*\.(jpg|jpeg|png|gif)$/
const regexRating = /^(?!0\d)\d{1,5}(\.\d{1,2})?$/

export function validate(input) {
  let errors = {}

  switch (true) {
    case input.name.length === 0:
      errors.name = 'You need insert a name'
      break
    case !regexImg.test(input.image):
      errors.image = 'You need insert a valid image'
      break
    case input.description.length === 0:
      errors.description = 'You must insert a description'
      break
    case input.launchDate.length === 0:
      errors.launchDate = 'You must insert a valid date'
      break
    case !regexRating.test(input.rating):
      errors.rating = 'You must insert a valid rating'
      break
    case input.genres.length === 0:
      errors.genres = 'You must select at least 1 genre'
      break
    case input.platforms.length === 0:
      errors.platforms = 'You must select at least 1 platform'
      break
    case input.name.length >= 90:
      errors.name = 'You cannot exceed ninety characters'
      break
    default:
      break
      
  }

  return errors
}

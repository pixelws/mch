import CMS from 'netlify-cms-app'
//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BylawsPagePreview from './preview-templates/BylawsPagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import VolunteerPagePreview from './preview-templates/VolunteerPagePreview'


//CMS.registerMediaLibrary(uploadcare);
//CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('bylaws', BylawsPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)
CMS.registerPreviewTemplate('volunteer', VolunteerPagePreview)

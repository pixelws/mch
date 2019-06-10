import CMS from 'netlify-cms-app'
//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BylawsPagePreview from './preview-templates/BylawsPagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import VolunteerPagePreview from './preview-templates/VolunteerPagePreview'
import EducationPagePreview from './preview-templates/EducationPagePreview'


//CMS.registerMediaLibrary(uploadcare);
//CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('bylaws', BylawsPagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)
CMS.registerPreviewTemplate('volunteer', VolunteerPagePreview)
CMS.registerPreviewTemplate('education', EducationPagePreview)

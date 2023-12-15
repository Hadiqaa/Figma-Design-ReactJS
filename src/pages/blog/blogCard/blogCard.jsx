import React from 'react';
import Images from '../../../assets/images/images';
import './blogCard.css';
import ReusableCard from '../card/card';

const BlogCard = () => {
    return (
   <div className='blogCardMain'>
      <div className='blogCardMini'>
       <div className='Volutpat'>
          <ReusableCard 
                imageSrc={Images.image2} 
                title="Nunc Volutpat Venenatis"
                date="May 10, 2022 | Category"
                description="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi."/>
         
           <ReusableCard 
                imageSrc={Images.image3} 
                title="Nunc Volutpat Venenatis"
                date="May 10, 2022 | Category"
                description="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue vitae, porttitor luctus urna. Morbi scelerisque semper congue."/>

       </div>

       <div className='Volutpat'>
           <ReusableCard 
                imageSrc={Images.image6} 
                title="Vestibulum Nisl Feliss"
                date="May 10, 2022 | Category"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "/>


            <ReusableCard 
                imageSrc={Images.image7} 
                title="Donec Sit Amet Nibh"
                date="May 10, 2022 | Category"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.  "/>
         
         
       </div>


       <div className='Volutpat'>
            <ReusableCard 
                imageSrc={Images.image11} 
                title="Proin Eu Augue Efficitur"
                date="May 10, 2022 | Category"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "/>
         
            <ReusableCard 
                imageSrc={Images.image4} 
                title="Maecenas Fringilla Augue"
                date="May 10, 2022 | Category"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.Donec quis felis imperdiet, vestibulum est ut, pulvinar dolor.  "/>
         
       </div>
    </div>
   </div>
    );
};

export default BlogCard;
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from './Auth';
import { CarContext } from './allDetails';

import {db} from './firebase';
import firebase from 'firebase';

import './CommentSection.scss';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import ProfileAvatar from './assets/icons/profile-avatar.png';

export default function CommentSection(props){

    const num = props.num;

    const { value1 } = useContext(CarContext);
    const [users, setUsers] = value1;
    console.log(users);

    const { val1 } = useContext(AuthContext);
    const [user, setUser] = val1;
    console.log(user);

    const [allComments,setAllComments] = useState([]);
    console.log(allComments);

    


    const [details, setDetails] = useState({comment: '',reply:''});
    console.log(details);

    useEffect(()=> {
        db.collection('Comments').onSnapshot((snapShot) => {
            setAllComments(snapShot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })
            ))
        });
    },[])

    var replyValue = 0;

    useEffect(()=>{

        if(replyValue == repliesArr.length){
            let elements = document.getElementsByClassName('replies-heading-reply');
            console.log(elements);

            let infoReplies = document.getElementsByClassName('info-replies');
            let infoPara = document.getElementsByClassName('info-para');
            
            for(let i=0;i<repliesArr.length;i++){
                

                if(repliesArr[i].length > 2){
                    elements[i].style.display = "none";
                    infoReplies[i].innerHTML = repliesArr[i].length;
                }
                else if(repliesArr[i].length == 0){
                    infoReplies[i].style.display = "none";
                    infoPara[i].style.display = "none";
                    elements[i].style.display = "none";
                }
                else{
                    infoReplies[i].style.display = "block";
                    infoPara[i].style.display = "block";
                    elements[i].style.display = "block";
                    infoReplies[i].innerHTML = repliesArr[i].length;
                }
            }
            
        }

    

    },[allComments])
        

    var repliesArr = [];
    allComments.map((item,index) => index != num ? null : repliesArr = item.data.comments.map(obj=> obj.replies.map(replies => replies.reply)));
    console.log(repliesArr);

    var commentsArr = [];
    allComments.map((item,index) => index != num ? null : commentsArr = item.data.comments.map(obj=>obj.comment));
    console.log(commentsArr);

    const valueSetter = () => {
        replyValue++;
        console.log(replyValue);

        

        // if(replyValue == repliesArr.length){
        //     let elements = document.getElementsByClassName('replies-heading-reply');
        //     console.log(elements);
            
        //     for(let i=0;i<repliesArr.length;i++){
        //         if(repliesArr[i].length > 2){
        //             if(elements[i] === undefined){
        //                 continue;
        //             }
        //             else{
        //                 elements[i].style.display = "none";
        //             }
        //         }
        //     }
        // }
    }
    

    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;

        setDetails((prev) => ({
            ...prev,
            [name] : val
        }));

        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /*DATE START*/
        let d = new Date(Date.now());
        let date = d.toDateString();
        console.log(date);

        let t = new Date();
        let hours = t.getHours();
        let minutes = t.getMinutes();
        let seconds = t.getSeconds();

        if(seconds >=0 && seconds <=9){
            seconds = `0${seconds}`;
        }
        if(minutes >=0 && minutes <=9){
            minutes = `0${minutes}`;
        }

        let time = `${hours}:${minutes}:${seconds}`;
        console.log(time);

        let finalDate = `${date} - ${hours}:${minutes}:${seconds}`;
        /*DATE END*/

        let userName;
        let userEmail;
        

        users.map(item=>item.data.user.map(obj=> obj.email == user.email ? userEmail = obj.email : null));
        console.log(userEmail);

        users.map(item=>item.data.user.map(obj=> obj.email == user.email ? userName = obj.name : null));
        console.log(userName);


        if(details.comment == "") {

        }
        else{
            db.collection("Comments").doc(`${num}`).update({
                comments: firebase.firestore.FieldValue.arrayUnion({
                    comment: details.comment,
                    date: finalDate,
                    name: userName,
                    email: userEmail,
                    replies: []
                })
            });

            setDetails({comment:'',reply:''});
        }
    }

    const handleReplySubmit = (e,comment,fetchedName,fetchedDate,index) => {
        e.preventDefault();
        console.log(comment);

        /*DATE START*/
        let d = new Date(Date.now());
        let date = d.toDateString();
        console.log(date);

        let t = new Date();
        let hours = t.getHours();
        let minutes = t.getMinutes();
        let seconds = t.getSeconds();

        if(seconds >=0 && seconds <=9){
            seconds = `0${seconds}`;
        }
        if(minutes >=0 && minutes <=9){
            minutes = `0${minutes}`;
        }

        let time = `${hours}:${minutes}:${seconds}`;
        console.log(time);

        let finalDate = `${date} - ${hours}:${minutes}:${seconds}`;
        /*DATE END*/

        let userName;
        let userEmail;
        

        users.map(item=>item.data.user.map(obj=> obj.email == user.email ? userEmail = obj.email : null));
        console.log(userEmail);

        users.map(item=>item.data.user.map(obj=> obj.email == user.email ? userName = obj.name : null));
        console.log(userName);



        
        let commentVal;
        allComments.map((item,index) => index != num ? null : commentVal = item.data.comments.map(obj => obj.comment));
        console.log(commentVal);

        let commentName;
        allComments.map((item,index) => index != num ? null : commentName = item.data.comments.map(obj => obj.name));
        console.log(commentName);

        let commentDate;
        allComments.map((item,index) => index != num ? null : commentDate = item.data.comments.map(obj => obj.date));
        console.log(commentDate);

        let commentEmail;
        allComments.map((item,index) => index != num ? null : commentEmail = item.data.comments.map(obj => obj.email));
        console.log(commentEmail);
    
        let replyVal;
        allComments.map((item,index) => index != num ? null : replyVal = item.data.comments.map(obj => obj.replies.map(replies=> replies.reply)));
        console.log(replyVal);

        let replyName;
        allComments.map((item,index) => index != num ? null : replyName = item.data.comments.map(obj => obj.replies.map(replies=> replies.name)));
        console.log(replyName);

        let replyDate;
        allComments.map((item,index) => index != num ? null : replyDate = item.data.comments.map(obj => obj.replies.map(replies=> replies.date)));
        console.log(replyDate);

        let replyEmail;
        allComments.map((item,index) => index != num ? null : replyEmail = item.data.comments.map(obj => obj.replies.map(replies=> replies.email)));
        console.log(replyEmail);

        let commentsArray = [];
        let commentObject = {};
        let repliesArray = [];

        for(let i=0;i<commentVal.length;i++){

            for(let j=0;j<replyVal[i].length;j++){
                repliesArray.push({
                    reply: replyVal[i][j],
                    name: replyName[i][j],
                    date: replyDate[i][j],
                    email: replyEmail[i][j]
                })
            }

            commentObject = {
                comment: commentVal[i],
                date: commentDate[i],
                name: commentName[i],
                email: commentEmail[i],
                replies: repliesArray
            }
            
            commentsArray.push(commentObject);
            repliesArray=[];

        }

        console.log(commentsArray);


        for(let i=0;i<1;i++){
            for(let j=0;j<commentsArray.length;j++){

                if(fetchedDate == commentsArray[j].date){
                    commentsArray[j] = {
                        comment: commentsArray[j].comment,
                        date: commentsArray[j].date,
                        name: commentsArray[j].name,
                        email: commentsArray[j].email,
                        replies: [...commentsArray[j].replies,{
                            reply: details.reply,
                            name: userName,
                            date: finalDate,
                            email: userEmail
                        }]
                    }

                }
                else{
                    continue;
                }   
            }

        }

        console.log(commentsArray);

        if(details.reply==""){
            alert("Can't post empty reply!");
        }
        else{
            db.collection("Comments").doc(`${num}`).update({
                comments: commentsArray
            });
        }

        setDetails({comment:'',reply:''});
        
        var elements = document.getElementsByClassName('replies-form-container');
        elements[index].style.display = "none";

    }

    
    
    const handleReplyBox = (index) => {

        var elements = document.getElementsByClassName('replies-form-container');
        
        for(let i=0;i<commentsArr.length;i++){
            if(i == index){
                if(elements[index].style.display == "block"){
                    elements[index].style.display = "none";
                }
                else{
                    elements[index].style.display = "block";
                }
            }
            else{
                if(elements[i].style.display == "block"){
                    elements[i].style.display = "none";
                }
            }
        }
    }

    const toggleReplies = (index) =>{

        let elements = document.getElementsByClassName('replies-heading-reply');
        

        if(elements[index].style.display == "none"){
            elements[index].style.display = "block";
        }
        else{
            elements[index].style.display = "none";
        }

        let info = document.getElementsByClassName('info-para');

        if(info[index].innerHTML == "View All Replies"){
            info[index].innerHTML="Hide All Replies";
        }
        else{
            info[index].innerHTML="View All Replies";
        }


        let infoReplies = document.getElementsByClassName('info-replies');
        infoReplies[index].innerHTML = repliesArr[index].length;
        
    }



    const toggleHideReplies = (index) => {
        let elements = document.getElementsByClassName('replies-heading-reply');

        if(elements[index].style.display == "block"){
            elements[index].style.display = "none";
        }
        else{
            elements[index].style.display = "block";
        }

        let info = document.getElementsByClassName('info-para');
        
        if(info[index].innerHTML == "Hide All Replies"){
            info[index].innerHTML="View All Replies";
        }
        else{
            info[index].innerHTML="Hide All Replies";
        }

        let infoReplies = document.getElementsByClassName('info-replies');
        infoReplies[index].innerHTML = repliesArr[index].length;

    }

    const handleCommentDelete = (name,date,comment,email,replies) => {
        db.collection("Comments").doc(`${num}`).update({
            comments: firebase.firestore.FieldValue.arrayRemove({
                comment,
                date,
                email,
                name,
                replies
            })
        })
    }

    const handleReplyDelete = (commentsDate, repliesDate) => {
        let commentVal;
        allComments.map((item,index) => index != num ? null : commentVal = item.data.comments.map(obj => obj.comment));
        console.log(commentVal);

        let commentName;
        allComments.map((item,index) => index != num ? null : commentName = item.data.comments.map(obj => obj.name));
        console.log(commentName);

        let commentDate;
        allComments.map((item,index) => index != num ? null : commentDate = item.data.comments.map(obj => obj.date));
        console.log(commentDate);

        let commentEmail;
        allComments.map((item,index) => index != num ? null : commentEmail = item.data.comments.map(obj => obj.email));
        console.log(commentEmail);
    
        let replyVal;
        allComments.map((item,index) => index != num ? null : replyVal = item.data.comments.map(obj => obj.replies.map(replies=> replies.reply)));
        console.log(replyVal);

        let replyName;
        allComments.map((item,index) => index != num ? null : replyName = item.data.comments.map(obj => obj.replies.map(replies=> replies.name)));
        console.log(replyName);

        let replyDate;
        allComments.map((item,index) => index != num ? null : replyDate = item.data.comments.map(obj => obj.replies.map(replies=> replies.date)));
        console.log(replyDate);

        let replyEmail;
        allComments.map((item,index) => index != num ? null : replyEmail = item.data.comments.map(obj => obj.replies.map(replies=> replies.email)));
        console.log(replyEmail);

        let commentsArray = [];
        let commentObject = {};
        let repliesArray = [];

        for(let i=0;i<commentVal.length;i++){

            for(let j=0;j<replyVal[i].length;j++){
                repliesArray.push({
                    reply: replyVal[i][j],
                    name: replyName[i][j],
                    date: replyDate[i][j],
                    email: replyEmail[i][j]
                })
            }

            commentObject = {
                comment: commentVal[i],
                date: commentDate[i],
                name: commentName[i],
                email: commentEmail[i],
                replies: repliesArray
            }
            
            commentsArray.push(commentObject);
            repliesArray=[];

        }

        console.log(commentsArray);


        for(let i=0;i<1;i++){
            for(let j=0;j<commentsArray.length;j++){

                if(commentsDate == commentsArray[j].date){
                    commentsArray[j] = {
                        comment: commentsArray[j].comment,
                        date: commentsArray[j].date,
                        name: commentsArray[j].name,
                        email: commentsArray[j].email,
                        replies: [...commentsArray[j].replies.filter(item=> item.date != repliesDate)]
                    }

                }
                else{
                    continue;
                }   
            }

        }

        console.log(commentsArray);

        db.collection("Comments").doc(`${num}`).update({
            comments: commentsArray
        });

    }

    return (
        <>
            <div className="comments-main-container">
                <div className="comments-heading">
                    <h4>Comments</h4>
                    <h5>Total comments: {commentsArr.length}</h5>
                </div>

                {user == null ? 
                <>
                <div className="comment-form-statement">
                    <p>You must be logged in to add or remove a comment!</p>
                    <Link to="/authenticate">Login Now!</Link>
                </div>
                </>
                :
                <div className="comment-form-container">
                    <form onSubmit={handleSubmit}>
                        <textarea className="comment-box" name="comment" onChange={handleChange} value={details.comment || ''}></textarea>
                        <button type="submit">Add comment</button>
                    </form>
                </div>
                }

                <div className="comments-container">

                    {allComments.map((item,index)=>{
                        return (
                            <>
                                {index != num ? null :
                        
                                    item.data.comments.map((obj,commentIndex)=> {
                                        return (
                                            <>
                                                <div className="comment">
                                                    <div className="comment-name-date-email-container">
                                                        <div>
                                                            <img src={ProfileAvatar} className="profile-avatar" />
                                                        </div>
                                                        <div>
                                                            <h6 className="comment-name">{obj.name}</h6>
                                                            <p className="comment-date">{obj.date}</p>
                                                            <p className="comment-email">{obj.email}</p>
                                                            
                                                        </div>
                                                    </div>

                                                    <p className="comment-text">{obj.comment}</p>

                                                    <div className="info-buttons">
                                                        {user == null ? null :
                                                        <>
                                                        {user.email != obj.email ? null 
                                                        :
                                                        <>  
                                                        <p onClick={()=>handleCommentDelete(obj.name,obj.date,obj.comment,obj.email,obj.replies)}>Delete</p>
                                                        <FiberManualRecordIcon style={{fontSize:'10px',margin:'0px 10px'}} />
                                                        </>
                                                        }
                                                        </>
                                                        }
                                                        
                                                        {user == null ? null 
                                                        :
                                                        <> 
                                                        <p onClick={()=>handleReplyBox(commentIndex)}>Reply</p>
                                                        {repliesArr[commentIndex].length > 0 ? 
                                                        <>
                                                        <FiberManualRecordIcon style={{fontSize:'10px',margin:'0px 10px'}} />
                                                        </>
                                                        :
                                                        null
                                                        }
                                                        
                                                        </>
                                                        }
                                                        
                                                        {repliesArr[commentIndex].length > 2 ?
                                                        <> 
                                                        <p onClick={()=>toggleReplies(commentIndex)} className="info-para">View All Replies</p>
                                                        <p className="info-replies">0</p>
                                                        </>
                                                        : 
                                                        <>
                                                        <p onClick={()=>toggleHideReplies(commentIndex)} className="info-para">Hide All Replies</p>
                                                        <p className="info-replies">0</p>
                                                        </>
                                                        }
                                                        
                                                    </div>

                                                    
                                                     
                                                    <div className="replies-container">

                                                        <div className="replies-form-container">
                                                            <form onSubmit={(e)=>handleReplySubmit(e,obj.comment,obj.name,obj.date,commentIndex)}>
                                                                <textarea className="reply-box" name="reply" value={details.reply || ''} onChange={handleChange}></textarea>
                                                                <button type="submit">Add reply</button>
                                                            </form>
                                                        </div>
                                                            
                                                            {repliesArr[commentIndex].length > 2 ? console.log(true) : console.log(false)}
                                                            {valueSetter()}
                                                           
                                                            <div className="replies-heading-reply">
                                                                <div className="replies-heading">
                                                                    <h6>REPLIES</h6>
                                                                </div>

                                                                {obj.replies.map(replies => {
                                                                    return (
                                                                        <>
                                                                            <div className="replies">
                                                                                <div className="reply-name-date-email-container">
                                                                                <div>
                                                                                    <img src={ProfileAvatar} className="profile-avatar" />
                                                                                </div>
                                                                                    <div>
                                                                                        <h6 className="reply-name">{replies.name}</h6>
                                                                                        <p className="reply-date">{replies.date}</p>
                                                                                        <p className="reply-email">{replies.email}</p>
                                                                                    </div>
                                                                                </div>

                                                                                <p className="reply-text">{replies.reply}</p>
                                                                                <div className="reply-delete-container">
                                                                                    {user == null ? null : user.email != replies.email ? null : <p className="reply-delete" onClick={()=>handleReplyDelete(obj.date,replies.date)}>Delete</p>}
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })}
                                                            </div>
                                                       
                                                    </div>
                                                        
                                                    

                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </>
                        )
                        
                        
                        
                    })}

                    

                    {/* <div className="comment">
                        <h6 className="comment-name">John Doe</h6>
                        <p className="comment-date">Mar 01, 2021</p>
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus non neque ac posuere. Fusce at facilisis nunc. Proin odio ex, tempus quis nulla sed, malesuada hendrerit metus. Duis maximus, metus ut dignissim pretium, turpis nisi bibendum tellus, id accumsan eros augue sed enim. Ut magna turpis, lobortis in ante at, mollis porttitor justo. Donec sodales sodales dui, porta ornare sapien sagittis ut. Vestibulum blandit orci ut vehicula semper. Nulla facilisi. Sed imperdiet vel sapien et ultricies. Ut faucibus tincidunt fermentum. Nam arcu odio, bibendum elementum bibendum ac, tempus ut quam. Fusce at sagittis est. Etiam vehicula sed urna dignissim fermentum. Pellentesque eu viverra nisl, ut ultricies purus. Nam facilisis pellentesque lacus, eu bibendum sem luctus a.</p>
                    

                        <div className="info-buttons">
                            <p>Delete</p>
                            <FiberManualRecordIcon style={{fontSize:'10px'}} />
                            <p onClick={handleReplyBox}>Reply</p>
                            <FiberManualRecordIcon style={{fontSize:'10px'}} />
                            <p>View All Replies</p>
                        </div>

                        <div className="replies-container">

                            <div className="replies-form-container">
                                <form onSubmit={handleReplySubmit}>
                                    <textarea className="reply-box"></textarea>
                                    <button type="submit">Add reply</button>
                                </form>
                            </div>

                            <div className="replies-heading">
                                <h6>REPLIES</h6>
                            </div>
                            <div className="replies">
                                <h6 className="reply-name">John Doe</h6>
                                <p className="reply-date">Mar 01, 2021</p>
                                <p className="reply-text">Very nice car</p>
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <h6 className="comment-name">John Doe</h6>
                        <p className="comment-date">Mar 01, 2021</p>
                        <p className="comment-text">Very nice car</p>
                    </div>

                    <div className="comment">
                        <h6 className="comment-name">John Doe</h6>
                        <p className="comment-date">Mar 01, 2021</p>
                        <p className="comment-text">Average car</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}
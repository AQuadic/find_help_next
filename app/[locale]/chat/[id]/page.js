"use client";
import { getProvider } from "@/components/useAPI/GetUser";
import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db, storage } from "@/utils/firebase";
import Cookies from "js-cookie";
import { Skeleton, Textarea } from "@mantine/core";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useStickyScroll } from "use-chat-scroll";

function page({ params }) {
  const [Message, setMessage] = useState("");
  const [Imgs, setImgs] = useState([]);
  const [provider, setProvider] = useState([]);
  const [AllMessage, setAllMessage] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);


  const handleHeaderInputChange = (e) => {
    const files = e.target.files; // Get the selected files
    for (let i = 0; i < files.length; i++) {
      const selectedFile = files[i];
      console.log(selectedFile);
      setSelectedFile((oldArray) => [...oldArray, selectedFile]);
      const imgs = ref(storage, `chat-images/${selectedFile.name}`);
      uploadBytes(imgs, selectedFile).then((data) => {
        console.log(data, "imgs");
        getDownloadURL(data.ref).then((val) => {
          setImgs((oldArray) => [...oldArray, val]);
        });
      });
    }
  };




  useEffect(() => {
    FetchDataOFProvider();
  }, []);

  const FetchDataOFProvider = async () => {
    const Providers = await getProvider(params.id);
    if (!Providers) console.log(Providers?.message);
    setProvider(Providers);
  };
  const MessageRef = collection(db, "messages");
  useEffect(() => {
    const qyeryMessage = query(
      MessageRef,
      where("chat_id", "==", `${Cookies.get("UserID") + "-" + params.id}`),
      orderBy("created_at")
    );
    const unsnap = onSnapshot(qyeryMessage, (snapshot) => {
      let allMessage = [];
      snapshot.forEach((doc) => {
        allMessage.push({ ...doc.data() });
      });
      setAllMessage(allMessage);
    });
    return () => {
      unsnap();
    };
  }, []);
  const handelSendMessage = async () => {
    if (Message ===""&&Imgs.length==0) return;
    await addDoc(MessageRef, {
      created_at: serverTimestamp(),
      chat_id: `${Cookies.get("UserID") + "-" + params.id}`,
      message: Message,
      user_received_id: params.id,
      user_sent_id: Cookies.get("UserID"),
      message_read: null,
      images: Imgs,
    });

    setMessage("");
    setImgs([])
    setAllMessage([])
  };



  return (
    <div className="container chat m90">
      {provider.id > 0 ? (
        <div className=" provider ">
          <div className="part1">
            <img
              src={provider.image ? provider.image.url : "/images/person.webp"}
              className="person"
              alt="person"
            />
            <div className="about_Provider">
              <h3>{provider?.name}</h3>
              <p>alex</p>
            </div>
          </div>
          <div className="rat_cus">
            <div className="twoRate">
              <div className="rating rat_cus_same">
                <h3>Provider Rating</h3>
                <div className="Star">
                  <p>4.8</p>
                  <img src="/images/star.svg" alt="star" />
                </div>
                <p>
                  <span>79% </span> Provider Rating
                </p>
              </div>
              <div className="customers rat_cus_same">
                <h3>Customers</h3>
                <h4>249K+</h4>
                <p>During the last 90 days</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="part2" >

        <div className="boxChat"  >
        {!AllMessage.length> 0 && (
            <div className="loadItems loadChat">
              <div className="item ">
                <Skeleton className="two"  height={30} width={"80%"}  />
                <Skeleton className="two"  height={40} width={"60%"}  />
                <Skeleton height={30} width={"80%"}  />
                <Skeleton height={30} width={"60%"}  />
               
              </div>
              
            </div>
          )}
          {AllMessage.map((mes, i) => {
            return (
                 <div
                key={i}
                className={` text ${
                  params.id !== mes.user_sent_id ? "user" : null
                } `}
              >
                {mes.images?.length > 0 ? (
                  <div className="textImg">
                    {mes.images.map((img, i) => {
                      return <img key={i} src={img} alt="tt" />;
                    })}
                  </div>
                ) : null}

                <p
                  className={`${
                    params.id !== mes.user_sent_id ? "user" : null
                  } `}
                >
                  {mes.message}
                </p>
              
              </div>
             
            );
          })}
        </div>
        <div className="inputChat">
          <div className="boxInput">
         
            {selectedFile.length > 0 ? (
              <div className="boxImages upload_images">
                {selectedFile.map((file, i) => {
                  return (
                    <div
                      key={i}
                      className="col-4 pluus doneImg"
                      style={{ position: "relative" }}
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        className="img img-thumbnail m-1 imgPreview"
                        style={{
                          background: "transparent",
                          maxHeight: "90px",
                          minHeight: "90px",
                          width: "100%",
                          height: "auto",
                        }}
                        alt="person"
                      />
                      <div
                        className="RemoveImge"
                        onClick={() => {
                          deleteObject(ref(storage, `chat-images/${file.name}`))
                            .then(() => {
                              console.log("delet form fir");
                            })
                            .catch((error) => {
                              console.log("noooooooooooo delet form fir");
                              console.log(error);
                            });
setImgs(Imgs.filter(item=>!item.includes(file.name)))
                          setSelectedFile(
                            selectedFile.filter((item) => item !== file)
                          );
                        }}
                      >
                        <p>X</p>
                      </div>
                    </div>
                  );
                })}{" "}
              </div>
            ) : null}

            <Textarea
              className="textInput"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={Message}
              autosize
              minRows={1}
            />

            <div id="image-container">
              <img src="/images/cam.svg" alt="Image" id="image" />
              <input
                type="file"
                id="file-input"
                onChange={handleHeaderInputChange}
              />
            </div>
          </div>

          <button
            className="btnSend"
            onClick={() => {
              handelSendMessage();
            }}
          >
            <img src="/images/send.svg" alt="send" />
          </button>
        </div>
      
      </div>
    </div>
  );
}

export default page;

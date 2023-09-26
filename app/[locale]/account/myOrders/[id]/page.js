"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnLogOut from "@/components/btnLogOut";
import { getProviders } from "@/components/useAPI/GetUser";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
const containerStyle = {
  width: "410px",
  height: "324px",
};

function page({ params }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDDbeB2JCI9I77iwI6SdzeHpcq2bx0qeQE",
  });

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const center = {
    lat: lat,
    lng: lng,
  };
  
  console.log(params);
  const [Provider, setProvider] = useState();
  useEffect(() => {
    FetchDataOFProvider();
  }, []);
  const FetchDataOFProvider = async () => {
    const Providers = await getProviders(params.id);
    if (!Providers) console.log(Providers?.message);
    setProvider(Providers);
    setLat(Providers.user_service.location_google_maps.lat);
    setLng(Providers.user_service.location_google_maps.lng);
  };
  console.log(Provider);
  return (
    <>
      <div className="container breadcrumbDetails">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Home
            </li>

            <li className="breadcrumb-item" aria-current="page">
              Account
            </li>
            <li className="breadcrumb-item" aria-current="page">
              My Services
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Booking Details
            </li>
          </ol>
        </nav>
      </div>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <ul>
              <li>
                <Link href="/account">My Profile</Link>
              </li>
              <li>
                <Link href="/account/myServices" className="active">
                  My services
                </Link>
              </li>
              <li>
                <Link href="/account/prmoted">Promotion</Link>
              </li>
              <li>
                <Link href="/account/myOrders">My Orders</Link>
              </li>
              <li>
                <Link href="/account/addressess">Addresses</Link>
              </li>
              <li>
                <BtnLogOut />
              </li>
            </ul>
          </div>
          <div className="Profile Profile2">
            <div className="warning">
              <img src="/images/warning.webp" alt="warning" />
              <div className="about_warning">
                <h3>Be careful!</h3>
                <p>
                  Your ratings have become low, please work to improve your
                  service.
                </p>
              </div>
            </div>
            {Provider && (
              <div className="infoclient">
                <div className="information">
                  <img
                    src={
                      Provider.provider.image
                        ? Provider.provider.image.url
                        : "/images/person.webp"
                    }
                    className="person"
                    alt="person"
                  />
                  <div className="name_phone">
                    <h3>{Provider.provider.name}</h3>
                    <div className="infoPhone">
                      <img src="/images/telephone.svg" alt="telephone" />
                      <p style={{ direction: "ltr" }}>+20 125 154 1598</p>
                    </div>
                  </div>
                </div>
                <div className="part2">
                  <div className="clientData">
                    <h4>Booking details</h4>
                    <h5>{Provider.user_service.description.en}</h5>
                    <ul>
                      <li>
                        <img src="/images/Time-Circle2.svg" alt="Time-Circle" />
                        <p>2 hrs Start 6:00 PM</p>
                      </li>
                      <li>
                        <img src="/images/Calendar.svg" alt="Calendar" />
                        <p>26 Nov,2022</p>
                      </li>
                      <li>
                        <img src="/images/Location2.svg" alt="Location" />
                        <p>{Provider.user_service.address_text.en}</p>
                      </li>
                      <li>
                        <img src="/images/Location2.svg" alt="Location" />
                        <p>On Site</p>
                      </li>
                      <li>
                        <img src="/images/cash.svg" alt="cash" />
                        <p>Pay On Cash</p>
                      </li>
                    </ul>
                  </div>
                  <div className="map_client">
                   
                        <div>
                    {isLoaded ? (
                      <>
                       

                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={8}
                        >
                          {/* Child components, such as markers, info windows, etc. */}
                          <>
                            <Marker
                              position={{ lat: lat, lng: lng }}
                              icon={{
                                url: `/images/mapicon.png`,
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(15, 15),
                                scaledSize: new window.google.maps.Size(30, 30),
                              }}
                            />
                          </>
                        </GoogleMap>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                    
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
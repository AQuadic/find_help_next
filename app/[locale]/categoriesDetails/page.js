import ItemCourse from '@/components/ItemCourse'
import React from 'react'

function page() {
  return (
    <>
       <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Categories</li>
          <li className="breadcrumb-item" aria-current="page">Repairs</li>
          <li className="breadcrumb-item" aria-current="page">Sub category</li>
        </ol>
      </nav>
    </div>

    <div className="details_head container">
      <h3>Get the support you need to run your business more smoothly</h3>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          id="dropdownMenuButton"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-target="#dropdownOne"
          aria-expanded="false"
        >
          Recommended services
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
    <section className="categories container m90">
      <div className="filter">
        <div className="search">
          <h3>Search</h3>
          <form action="">
            <input type="text" placeholder="What You Search about" />
          </form>
        </div>
        <h3 className="headDrop">Categories</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Gender
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="" className="active">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Cleaning Services
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Home Exterior
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Cleaning Services
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Home Exterior
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Cleaning Services
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Home Exterior
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                  <li>
                    <a href="">sub categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="allServices">
        <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              oldsalary="2000"
              newsalary="1000"
              image="1"
            />
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="2"
              
            />
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="3"
            />
             <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              oldsalary="2000"
              newsalary="1000"
              image="1"
            />
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="2"
              
            />
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="3"
            />
             <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              oldsalary="2000"
              newsalary="1000"
              image="1"
            />
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="2"
              
            />
            <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="3"
            />
        </div>
        <button className="more">Show More</button>
      </div>
    </section>
    </>
  )
}

export default page
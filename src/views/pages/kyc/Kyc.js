import React, { useRef, useState } from 'react'
import _nav from '../../../_nav'
import { CopyToClipboard } from 'react-copy-to-clipboard'
const toggleDropdowns = () => {
  setShowDropdowns(!showDropdowns)
}
import {
  CCol,
  CToaster,
  CCard,
  CCardBody,
  CCardHeader,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CToastBody,
  CToast,
  CToastHeader,
  CCardImage,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCardLink,
} from '@coreui/react'
import { cilLibraryAdd, cilCopy, cil3d } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import ReactImg from '../../../../src/assets/images/react.jpg'

const Kyc = () => {
  const [showDropdowns, setShowDropdowns] = useState(false)
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const toggleDropdowns = () => {
    setShowDropdowns(!showDropdowns)
  }

  const exampleToast = (
    <CToast title="CoreUI for React.js">
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">Castle</strong>
      </CToastHeader>
      <CToastBody>Copied to clipboard!</CToastBody>
    </CToast>
  )

  return (
    <CCol xs={9} className="m-auto">
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Client Details</strong>
        </CCardHeader>
        <CCardBody>
          <p className="text-body-secondary small">
            Kindly fill the information below as part of KYC
          </p>
          <CTabs activeItemKey={1}>
            <CTabList variant="underline-border">
              <CTab aria-controls="facility-tab-pane" itemKey={1}>
                Facility Details
              </CTab>
              <CTab aria-controls="contact-tab-pane" itemKey={2}>
                Contact Person Details
              </CTab>
              <CTab aria-controls="api-tab-pane" itemKey={3}>
                APIs Access
              </CTab>
            </CTabList>
            <CTabContent>
              <CTabPanel className="py-3" aria-labelledby="facility-tab-pane" itemKey={1}>
                {/* -----------------------   Facility Details Data ------------------------ */}
                <CForm>
                  <div className="flex justify-evenly">
                    <div className="">
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Industry</CFormLabel>
                        <CFormSelect
                          aria-label="Default select example"
                          options={[
                            'Select an Industry',
                            { label: 'One', value: '1' },
                            { label: 'Two', value: '2' },
                            { label: 'Three', value: '3', disabled: true },
                          ]}
                        />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">
                          Physical Address
                        </CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">
                          KRA PIN Number
                        </CFormLabel>
                        <CFormInput
                          type="text"
                          placeholder="Default input"
                          aria-label="default input example"
                        />
                      </div>
                    </div>

                    <div className="">
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Office Email</CFormLabel>
                        <CFormInput
                          type="text"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          name="office_email"
                        />
                      </div>

                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">
                          Offical Phone Number
                        </CFormLabel>
                        <CFormInput
                          type="text"
                          placeholder="Phone Number"
                          aria-label="default input example"
                        />
                      </div>
                    </div>
                  </div>
                </CForm>
                <div className="m-auto w-full">
                  <CButton color="primary" type="submit">
                    Next
                  </CButton>
                </div>
              </CTabPanel>
              <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={2}>
                {/* -----------------------  Contact Person Details Data ------------------------ */}
                <div className="bg-gray-200 px-2 py-1 rounded-md mb-4">
                  <p className="font-bold">Why do we need this information?</p>
                  <p>
                    This contact will be created as a customer in the incident report platform to
                    enable support. An alert will be sent to this acocunt for user activation
                  </p>
                </div>
                <CForm>
                  <div className="flex justify-evenly">
                    <div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">First Name</CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows={1}></CFormTextarea>
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Last Name</CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows={1}></CFormTextarea>
                      </div>
                    </div>
                    <div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Contact Email</CFormLabel>
                        <CFormInput
                          type="email"
                          //   placeholder="Email Address"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">
                          Offical Number
                        </CFormLabel>
                        <CFormInput
                          type="text"
                          //   placeholder="Phone Number"
                          aria-label="default input example"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3"></div>
                </CForm>
                <div className="w-1/2 m-auto justify-evenly">
                  <CButton color="primary" type="submit" classname="m-4">
                    Next
                  </CButton>
                  <CButton color="primary" type="submit" classname="m-4">
                    Back
                  </CButton>
                </div>
              </CTabPanel>
              <CTabPanel className="py-3" aria-labelledby="api-tab-pane" itemKey={3}>
                {/* -----------------------   APIs Access Data ------------------------ */}
                <CCol xs={12}>
                  <CCard className="mb-4">
                    <CCardHeader>
                      <strong>Get Authenticated</strong>
                    </CCardHeader>
                    <CCardBody>
                      <div className="flex fex-row m-auto justify-evenly items-center">
                        <div className="w-1/3 px-4">
                          <div className="flex flex-col justify-center" onClick={toggleDropdowns}>
                            <p className="text-center"> Get New Credentials</p>
                            <CIcon
                              customClassName="sidebar-brand-full"
                              icon={cilLibraryAdd}
                              height={150}
                            />{' '}
                          </div>
                          {showDropdowns && (
                            <div className="flex flex-col w-full justify-evenly">
                              <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlTextarea1">
                                  Server
                                </CFormLabel>
                                <CFormSelect
                                  aria-label="Default select example"
                                  options={[
                                    'Select a server',
                                    { label: 'One', value: '1' },
                                    { label: 'Two', value: '2' },
                                    { label: 'Three', value: '3', disabled: true },
                                  ]}
                                />
                              </div>
                              <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlTextarea1">
                                  Application
                                </CFormLabel>
                                <CFormSelect
                                  aria-label="Default select example"
                                  options={[
                                    'Select an Application',
                                    { label: 'One', value: '1' },
                                    { label: 'Two', value: '2' },
                                    { label: 'Three', value: '3', disabled: true },
                                  ]}
                                />
                              </div>
                              <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlTextarea1">
                                  Authorization Type
                                </CFormLabel>
                                <CFormSelect
                                  aria-label="Default select example"
                                  options={[
                                    'Select a Type',
                                    { label: 'UAT', value: '1' },
                                    { label: 'Production', value: '2' },
                                  ]}
                                />
                              </div>
                              <div className="m-auto w-full">
                                <CButton color="primary" type="submit">
                                  Submit
                                </CButton>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="w-2/3 justify-evenly flex flex-row flex-wrap">
                          <CCard className="my-2 rounded-lg" style={{ width: '18rem' }}>
                            <CCardBody
                              className="text-center"
                              style={{ backgroundColor: '#4a4a4a', color: 'white' }}
                            >
                              <div>
                                <CIcon icon={cil3d} height={50} />
                                <h5 className="mt-2">App Name: HMIS </h5>
                              </div>
                              <CButton color="secondary" variant="outline" className="mt-2">
                                Domain: Sandbox
                              </CButton>
                              <CButton color="secondary" className="mt-2">
                                Show Credentials
                              </CButton>
                            </CCardBody>
                            <CCardBody>
                              <CCardText>Products</CCardText>
                              <CButton color="success" className="mb-2">
                                CASTLE EXPRESS Sandbox
                              </CButton>
                              <CButton color="success" className="mb-2">
                                CASTLE Sandbox
                              </CButton>
                              <CCardText>
                                <strong>API Key:</strong> h9X...
                                <CopyToClipboard text="h9X...">
                                  <CIcon
                                    icon={cilCopy}
                                    height={15}
                                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                                    onClick={() => addToast(exampleToast)}
                                  />
                                </CopyToClipboard>
                                <CToaster ref={toaster} push={toast} placement="top-end" />
                              </CCardText>
                              <CCardText>
                                <strong>APIs Secret:</strong> 5ije...
                                <CopyToClipboard text="5ije...">
                                  <CIcon
                                    icon={cilCopy}
                                    height={15}
                                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                                    onClick={() => addToast(exampleToast)}
                                  />
                                </CopyToClipboard>
                                <CToaster ref={toaster} push={toast} placement="top-end" />
                              </CCardText>
                              <CCardText>
                                <strong>Shortcode:</strong> N/A
                              </CCardText>
                              <CCardText>
                                <strong>Created On:</strong> Tue, 9th of Jul 2024 at 21:15:56 pm
                              </CCardText>
                            </CCardBody>
                          </CCard>
                          <CCard className="my-2" style={{ width: '18rem' }}>
                            <CCardBody
                              className="text-center"
                              style={{ backgroundColor: '#4a4a4a', color: 'white' }}
                            >
                              <div>
                                <CIcon icon={cil3d} height={50} />
                                <h5 className="mt-2">App Name: HMIS </h5>
                              </div>
                              <CButton color="secondary" variant="outline" className="mt-2">
                                Domain: Sandbox
                              </CButton>
                              <CButton color="secondary" className="mt-2">
                                Show Credentials
                              </CButton>
                            </CCardBody>
                            <CCardBody>
                              <CCardText>Products</CCardText>
                              <CButton color="success" className="mb-2">
                                CASTLE EXPRESS Sandbox
                              </CButton>
                              <CButton color="success" className="mb-2">
                                CASTLE Sandbox
                              </CButton>
                              <CCardText>
                                <strong>API Key:</strong> h9X...
                                <CopyToClipboard text="h9X...">
                                  <CIcon
                                    icon={cilCopy}
                                    height={15}
                                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                                    onClick={() => addToast(exampleToast)}
                                  />
                                </CopyToClipboard>
                                <CToaster ref={toaster} push={toast} placement="top-end" />
                              </CCardText>
                              <CCardText>
                                <strong>APIs Secret:</strong> 5ije...
                                <CopyToClipboard text="5ije...">
                                  <CIcon
                                    icon={cilCopy}
                                    height={15}
                                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                                    onClick={() => addToast(exampleToast)}
                                  />
                                </CopyToClipboard>
                                <CToaster ref={toaster} push={toast} placement="top-end" />
                              </CCardText>
                              <CCardText>
                                <strong>Shortcode:</strong> N/A
                              </CCardText>
                              <CCardText>
                                <strong>Created On:</strong> Tue, 9th of Jul 2024 at 21:15:56 pm
                              </CCardText>
                            </CCardBody>
                          </CCard>
                        </div>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CTabPanel>
            </CTabContent>
          </CTabs>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default Kyc

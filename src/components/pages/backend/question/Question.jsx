
import React from 'react'
import ModalValidation from '../partials/modals/ModalValidation'
import ModalError from '../partials/modals/ModalError'
import ToastSuccess from '../partials/ToastSuccess'
import ModalAddQuestion from './ModalAddQuestion'
import Footer from '../partials/Footer'
import SearchBar from '../partials/SearchBar'
import Header from '../partials/Header'
import SideNavigation from '../partials/SideNavigation'
import QuestionTable from './QuestionTable'
import { Plus } from 'lucide-react'
import { StoreContext } from '@/components/store/StoreContext'
import { setIsAdd } from '@/components/store/StoreAction'

const Question = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="question" />
          <main>
            <Header title="Question" subtitle='Manage Question' />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>

              <QuestionTable/>
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.isAdd && <ModalAddQuestion />}
      {store.isValidate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.isSuccess && <ToastSuccess />}
    </>
  )
}

export default Question
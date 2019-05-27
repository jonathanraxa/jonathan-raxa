import React from "react";
import {ModalItem} from './ModalItem';

function PortfolioModal({item, id}) {
    console.log(item);
       return (
        <div className="modal fade" id={"Modal-"+id} tabIndex={-1} role="dialog" aria-labelledby={"Modal-label-"+id}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title" id={"Modal-label-"+id} />
                        </div>
                       
                       <ModalItem item={item} /> 

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default PortfolioModal;
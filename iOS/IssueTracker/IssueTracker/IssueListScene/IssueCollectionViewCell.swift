//
//  IssueCollectionViewCell.swift
//  IssueTracker
//
//  Created by TTOzzi on 2020/11/03.
//

import UIKit

final class IssueCollectionViewCell: UICollectionViewCell {
    
    static var identifier: String {
        return String(describing: Self.self)
    }
    @IBOutlet private weak var titleLabel: UILabel!
    @IBOutlet private weak var descriptionLabel: UILabel!
    @IBOutlet private weak var mileStoneLabel: PaddingLabel!
    @IBOutlet private weak var labelLabel: PaddingLabel!
    @IBOutlet private(set) weak var selectButton: UIButton!
    override var isSelected: Bool {
        didSet {
            if isEditing {
            selectButton.isSelected = isSelected
            }
        }
    }
    var isEditing: Bool = false {
        didSet {
            let changedX: CGFloat = isEditing ? -50 : 0
                UIView.animate(withDuration: 0.3) { [weak self] in
                    guard let self = self else { return }
                    self.layer.bounds = CGRect(x: changedX,
                                               y: self.bounds.minY,
                                               width: self.bounds.width,
                                               height: self.bounds.height)
                }
        }
    }
    
    func update(with issue: Issue) {
        titleLabel.text = issue.title
        descriptionLabel.text = issue.description
        mileStoneLabel.text = issue.mileStone?.title
        mileStoneLabel.isHidden = issue.mileStone == nil
    }
}
